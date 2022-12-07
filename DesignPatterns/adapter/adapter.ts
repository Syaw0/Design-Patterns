

class Client{
musicStore:MusicStore
  constructor() {
    this.musicStore = new MusicStore()
  }

  receiveMusicInMp3(name:string) {
    return this.musicStore.findMusic(name)
 }
}


class MusicStore{
  // store have just .flack music
  findMusic(name:string){
    return `${name}.flack`
  }
}

//   ****
//   ****
//   ****
//   ****    lets build our ADAPTER
// ********
//  ******
//   ****
//    **


// ! this is our problem we clint want music in .mp3 but store just have .flack
// ? what we can do ?
// TODO Implement the ADAPTER :D


class Client2 {
  #musicStore:MusicStore2
  constructor() {
    this.#musicStore = new MusicStore2()
  }

  receiveMusicInMp3(name:string) {
    return this.#musicStore.findMusic(name, "Mp3")
 }

 receiveMusicInWav(name:string) {
  return this.#musicStore.findMusic(name, "Wav")
}

receiveMusicInOgg(name:string) {
  return this.#musicStore.findMusic(name , "Ogg")
}

}

class Adapter{

  convertFormats(format:string, file:string){
    return file.split('.')[0].concat(`.${format}`)
  }

}

class MusicStore2{
adapter:Adapter

  constructor() {
    this.adapter = new Adapter()
  }

  findMusic(name:string,format:string){
    const musicFile = `${name}.flack`
    // search a music ....
    return this.adapter.convertFormats(format, musicFile)
  }

}


// ? Lets test it 


const client = new Client2()

let mp3Music = client.receiveMusicInMp3("ebi-shadMehr")
console.log(mp3Music)

let wavMusic = client.receiveMusicInWav("ebi-shadMehr")
console.log(wavMusic)




