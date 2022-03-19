import { IPlaylist } from '../interface/IPlaylist';
import { IUsuario } from './../interface/IUsuario';
export function SpotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
    return{
        id: user.id,
        nome: user.display_name,
        iamgemUrl: ''
    }
    
}
export function SpotifyPlaylist(playlisty: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
    return {
        id: playlisty.id,
        nome: playlisty.name,
        imagemUrl: ''
    }
}