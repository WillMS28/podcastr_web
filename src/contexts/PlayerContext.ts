import { createContext } from 'react'

type Episode = {
  title: string
  thumbnail: string
  members: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Array<Episode>
  currentEpisodeIndex: number
  play: (episode: Episode) => void
}
export const PlayerContext = createContext({} as PlayerContextData)
