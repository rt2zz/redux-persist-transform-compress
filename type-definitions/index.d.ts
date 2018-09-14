import { PersistConfig, Transform } from "redux-persist";

export default function createCompressor<State, Raw> (config?: PersistConfig): Transform<State, Raw>;
