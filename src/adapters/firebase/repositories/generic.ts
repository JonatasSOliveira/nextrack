import { firebaseFirestore } from '@/infra/firebase'
import { DocumentReference, addDoc, collection, doc, getDocs, updateDoc, query, where, getDoc } from 'firebase/firestore'

export abstract class GenericFirebaseRepository<CreateRequestDTO, ListResponseDTO> {
    protected col = collection(firebaseFirestore, 'persons')

    constructor(protected readonly collectionName: string) { }

    getRef(id: string): DocumentReference {
        return doc(this.col, id)
    }

    private async getDataOrNotFound(id: string, userId: string): Promise<ListResponseDTO> {
        const docRef = this.getRef(id)
        const doc = (await getDoc(docRef)).data()
        if (doc?.user_id !== userId) {
            throw Error('Not found')
        }

        return doc as ListResponseDTO
    }

    public async create(data: CreateRequestDTO): Promise<void> {
        await addDoc(this.col, data as any)
    }

    public async list(userId: string): Promise<ListResponseDTO[]> {
        const q = query(this.col, where('user_id', '==', userId))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as ListResponseDTO)
    }

    public async update<UpdateDTO>(id: string, userId: string, data: Partial<CreateRequestDTO> | UpdateDTO): Promise<void> {
        this.getDataOrNotFound(id, userId)
        await updateDoc(this.getRef(id), data as any)
    }

    public async read(id: string, userId: string): Promise<ListResponseDTO> {
        return this.getDataOrNotFound(id, userId)
    }


} 