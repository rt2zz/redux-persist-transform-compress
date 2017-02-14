import { PersistorConfig, Transform } from "redux-persist";

export default function createCompressor<State, Raw> (config?: PersistorConfig): Transform<State, Raw>;
