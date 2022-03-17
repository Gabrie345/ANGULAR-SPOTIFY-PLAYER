import { IUsuario } from './../interface/IUsuario';
export function SpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
    return {
        id: user.id,
        nome: user.display_name,
        iamgemUrl: user.images.pop().url
    }
}