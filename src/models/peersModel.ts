import { Schema, model } from 'mongoose'

const peers: Schema<any> = new Schema({
    peerNum: { type: Number, required: true },
    ownerName: { type: String, required: false, default: null },
    isBusy: { type: Boolean, required: true, default: false },
    lastIP: { type: String, required: false, default: null },
    peerKey: { type: String, required: true }
})

export default model('peers', peers)