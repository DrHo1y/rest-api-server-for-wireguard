export interface IPeerModel {
    peerNum: number,
    ownerName: string | null,
    isBusy: boolean,
    lastIP: string | null,
    peerKey: string
}
