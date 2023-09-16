const { httpError } = require("../helpers/handleError");
const userModel = require("../models/users");
const PORT = process.env.PORT || 3000;
const URL_PUBLIC = process.env.URL_PUBLIC || "/";
const getItems = async (req, res) => {
  try {
    const listAll = [
      {
        _id: 1,
        name: "Buscando mi meta",
        album: "Buscando mi meta",
        cover:
          "https://i.scdn.co/image/ab67616d0000b27357d0b7fe9f291d0ec0efecda",
        artist: {
          name: "Chikano Jcr",
          nickname: "Chikano Jcr",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track.mp3",
      },
      {
        _id: 2,
        name: "Prendela",
        album: "Prendela",
        cover:
          "https://cdns-images.dzcdn.net/images/cover/0db24bdd398545626d43ba274a77f0e6/500x500.jpg",
        artist: {
          name: "Under Side 821",
          nickname: "Under Side 821",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-1.mp3",
      },
      {
        _id: 3,
        name: "A ti te da besitos",
        album: "Golpe Avisa",
        cover:
          "https://m.media-amazon.com/images/I/81dbCkKRs3L._UF894,1000_QL80_.jpg",
        artist: {
          name: "Cartel de Santa",
          nickname: "Cartel de Santa",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-2.mp3",
      },
      {
        _id: 4,
        name: "Pajaros en el alambre",
        album: "Trap y no llores",
        cover:
          "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b4/1f/6e/b41f6ec5-e8f7-e91d-ba2c-7290d17b1e90/195497366866.jpg/1200x1200bf-60.jpg",
        artist: {
          name: "Millonario",
          nickname: "Millonario",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-3.mp3",
      },
      {
        _id: 5,
        name: "Burbujas de cristal",
        album: "Burbujas de cristal",
        cover:
          "https://i1.sndcdn.com/artworks-wyJTC93vc4Ezdyxy-RHPpuw-t500x500.jpg",
        artist: {
          name: "Cartel de Santa ft. Millonario",
          nickname: "Cartel de Santa ft. Millonario",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-4.mp3",
      },
      {
        _id: 6,
        name: "Shorty Party",
        album: "Shorty Party",
        cover:
          "https://cdns-images.dzcdn.net/images/cover/aa59c5e82fd29b63238c98f5c9c25268/500x500.jpg",
        artist: {
          name: "Cartel de Santa",
          nickname: "Cartel de Santa",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-5.mp3",
      },
      {
        _id: 7,
        name: "Rayas de Patron",
        album: "Soy la Bomba",
        cover:
          "https://source.boomplaymusic.com/group10/M00/03/21/59a2173be2ef42b28ae72a5bd1d47883_320_320.jpg",
        artist: {
          name: "Millonario",
          nickname: "Millonario",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-6.mp3",
      },
      {
        _id: 8,
        name: "Bien Grifo",
        album: "Bien Grifo",
        cover:
          "https://i.scdn.co/image/ab67616d0000b273cd8242033c7ac8b897f78b6f    ",
        artist: {
          name: "Lexx Doblex`s",
          nickname: "Lexx Doblex`s",
          nationality: "MX",
        },
        duration: {
          start: 0,
          end: 333,
        },
        url: "${URL_PUBLIC}/track-7.mp3",
      },
    ];
    res.send({ data: listAll });
  } catch (e) {
    httpError(res, e);
  }
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const resDetail = await userModel.create({
      name,
      age,
      email,
    });
    res.send({ data: resDetail });
  } catch (e) {
    httpError(res, e);
  }
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
