import { IPeerModel } from '../interfaces/interfaces.js';
import peerModel from '../models/peersModel.js'

export async function getPeerByNumber(peerNum: number): Promise<IPeerModel | string | null> {
    try {
        const peer: IPeerModel | null = await peerModel.findOne({ peerNum })
        if(peer != null) {
            return peer
        } 
        const nullError = 'nullError!'
        return nullError
    } catch (e: unknown) {
        const error = 'error !'
        return error
    }
}

export async function getAllPeers(): Promise<IPeerModel[] | IPeerModel | string | null> {
    try {
        const peers: IPeerModel[] | null = await peerModel.find({})
        if(peers != null) {
            return peers
        } 
        const nullError = 'nullError!'
        return nullError
    } catch (e: unknown) {
        const error = 'error !'
        return error
    }
}

export async function getAllFreePeers(): Promise<IPeerModel[] | IPeerModel |string | null> {
    try {
        const peers: IPeerModel[] | null = await peerModel.find({ isBusy: false })
        if(peers != null) {
            return peers
        } 
        const nullError = 'nullError!'
        return nullError
    } catch (e: unknown) {
        const error = 'error !'
        return error
    }
}

export async function getAllBusyPeers(): Promise<IPeerModel[] | IPeerModel | string | null> {
    try {
        const peers: IPeerModel[]| IPeerModel | null = await peerModel.find({ isBusy: true })
        if(peers != null) {
            return peers
        } 
        const nullError = 'nullError!'
        return nullError
    } catch (e: unknown) {
        const error = 'error !'
        return error
    }
}

export async function changePeerByNumber(peerNum: number, ownerName: string): Promise<IPeerModel | string | null> {
    try {
        const peer: IPeerModel | null = await peerModel.findOneAndUpdate({ peerNum }, { ownerName })
        if(peer != null) {
            return peer
        } 
        const nullError = 'nullError!'
        return nullError
    } catch (e: unknown) {
        const error = 'error !'
        return error
    }
}