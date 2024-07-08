import { firebaseFirestore } from '@/infra/firebase'
import { 
    DocumentReference, addDoc, collection, doc, getDocs, updateDoc, query, where, getDoc, Timestamp, DocumentSnapshot 
} from 'firebase/firestore'

export abstract class GenericFirebaseRepository<CreateRequestDTO, ListResponseDTO> {
    protected col = collection(firebaseFirestore, 'persons')

    constructor(protected readonly collectionName: string) { }

    getRef(id: string): DocumentReference {
        return doc(this.col, id)
    }

    private convertDocToData(doc: DocumentSnapshot): ListResponseDTO {
        const { created_at, updated_at, deleted_at, ...rest} = doc.data() as any

        return {
            ...rest,
            id: doc.id,
            created_at: created_at?.toDate(),
            updated_at: updated_at?.toDate(),
            deleted_at: deleted_at?.toDate()
        }
    }

    private async getDataOrNotFound(id: string, userId: string): Promise<ListResponseDTO> {
        const docRef = this.getRef(id)
        const doc = this.convertDocToData(await getDoc(docRef)) as any
        if (doc?.user_id !== userId) {
            throw Error('Not found')
        }

        return doc as ListResponseDTO
    }

    public async create(data: CreateRequestDTO): Promise<void> {
        await addDoc(this.col, {...data, created_at: Timestamp.now(), updated_at: Timestamp.now(), deleted_at: null})
    }

    public async list(userId: string): Promise<ListResponseDTO[]> {
        const q = query(this.col, where('user_id', '==', userId), where('deleted_at', '==', null))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => this.convertDocToData(doc))
    }

    public async update<UpdateDTO>(
        id: string, userId: string, data: Partial<CreateRequestDTO> | UpdateDTO
    ): Promise<void> {
        this.getDataOrNotFound(id, userId)
        await updateDoc(this.getRef(id), {...data, updated_at: Timestamp.now()})
    }

    public async read(id: string, userId: string): Promise<ListResponseDTO> {
        return this.getDataOrNotFound(id, userId)
    }

    public async logicalDelete(id: string, userId: string): Promise<void> {
        await this.getDataOrNotFound(id, userId)
        await updateDoc(this.getRef(id), { deleted_at: Timestamp.now() })
    }
} 