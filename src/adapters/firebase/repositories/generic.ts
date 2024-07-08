import { firebaseFirestore } from '@/infra/firebase'
import { DocumentReference, addDoc, collection, doc, getDocs, updateDoc, query, where } from 'firebase/firestore'

export abstract class GenericFirebaseRepository<CreateRequestDTO, ListResponseDTO> {
    protected col = collection(firebaseFirestore, 'PERSON')

    constructor(protected readonly collectionName: string) { }

    getRef(id: string): DocumentReference {
        return doc(this.col, id)
    }

    public async create(data: CreateRequestDTO): Promise<void> {
        const docRef = await addDoc(this.col, data as any)
    }

    public async list(userId: string): Promise<ListResponseDTO[]> {
        const q = query(this.col, where('user_id', '==', userId))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as ListResponseDTO)
    }

    public async update<UpdateDTO>(docRef: DocumentReference, data: Partial<CreateRequestDTO> | UpdateDTO): Promise<void> {
        await updateDoc(docRef, data as any)
    }


} 