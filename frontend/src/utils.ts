import { FetchResultsData, Result } from "./features/app/appSlice";

export const result: Result = {
  wrapperType: "track",
  kind: "song",
  artistId: 338264227,
  collectionId: 1440818331,
  trackId: 1440819532,
  artistName: "Ellie Goulding",
  collectionName: "Halcyon Days (Deluxe Edition)",
  trackName: "Burn",
  collectionCensoredName: "Halcyon Days (Deluxe Edition)",
  trackCensoredName: "Burn",
  artistViewUrl: "https://music.apple.com/us/artist/ellie-goulding/338264227?uo=4",
  collectionViewUrl: "https://music.apple.com/us/album/burn/1440818331?i=1440819532&uo=4",
  trackViewUrl: "https://music.apple.com/us/album/burn/1440818331?i=1440819532&uo=4",
  previewUrl:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/7a/4a/f77a4aaf-e9fb-bffd-9ff0-9e642e2256e2/mzaf_4764979938122501614.plus.aac.p.m4a",
  artworkUrl30:
    "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/99/48/f6/9948f600-7cfb-1c09-b8f7-b390557f0e30/13UAAIM44623.rgb.jpg/30x30bb.jpg",
  artworkUrl60:
    "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/99/48/f6/9948f600-7cfb-1c09-b8f7-b390557f0e30/13UAAIM44623.rgb.jpg/60x60bb.jpg",
  artworkUrl100:
    "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/99/48/f6/9948f600-7cfb-1c09-b8f7-b390557f0e30/13UAAIM44623.rgb.jpg/100x100bb.jpg",
  collectionPrice: 15.99,
  trackPrice: 1.29,
  releaseDate: new Date("2013-07-05T12:00:00Z"),
  collectionExplicitness: "notExplicit",
  trackExplicitness: "notExplicit",
  discCount: 1,
  discNumber: 1,
  trackCount: 29,
  trackNumber: 19,
  trackTimeMillis: 231212,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Pop",
  isStreamable: true,
};

export const sample: FetchResultsData = {
  resultCount: 1,
  results: [result],
};
