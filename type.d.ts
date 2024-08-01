interface User {
  id: string;
  username: string;
  foto: string;
  nome: string;
}

interface Position {
  x: number;
  y: number;
}

interface UserInPhoto {
  user: {
    username: string;
  };
  position: Position;
}

interface ImageResolution {
  url: string;
  width: number;
  height: number;
}

interface Images {
  resolucaoPadrao: ImageResolution;
  resolucaoMedia: ImageResolution;
  thumbnail: ImageResolution;
}

interface Metadata {
  filter: string;
  users_in_photo: UserInPhoto[];
  engagement: number;
  impressions: number;
  reach: number;
  saved: number;
  idFacebook: string | null;
}

interface Reference {
  status: string;
  id: string;
  isInfluencer?: boolean;
  type?: string;
  oldId?: string;
  gamification?: boolean;
}

interface DataResponse {
  _id: string;
  obtidoEm: string;
  origem: string;
  uid: string;
  tags: string[];
  link: string;
  tipo: string;
  upvotes: number;
  comentarios: number;
  criadoEm: string;
  legenda: string;
  usuario: User;
  localizacao: string | null;
  imagens: Images;
  metadados: Metadata;
  referencias: Reference[];
  lastUpdate: string;
}
