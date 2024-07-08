'use server'
import { AuthService } from '@/application/services/auth'
import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthSignInFormData } from './form-schema'
import { setSession } from '@/lib/auth'

export async function signIn(authData: AuthSignInFormData): Promise<void> {
    const authService = new AuthService(new FirebaseAuthAdapter())
    const loggedUser = await authService.signIn(authData);
    await setSession(loggedUser);
}