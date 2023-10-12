import TrackPlayer, { Track } from 'react-native-track-player';

import playlistData from '../assets/data/playlist.json';
// @ts-expect-error – sure we can import this
import localTrack from '../assets/resources/pure.m4a';
// @ts-expect-error – sure we can import this
import localArtwork from '../assets/resources/artwork.jpg';

export const QueueInitialTracksService = async (): Promise<void> => {
  await TrackPlayer.load((playlistData as Track[])[0]);
};
