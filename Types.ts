interface IPatch {
    small: string;
}

interface ILinks {
    patch: IPatch;
}

export interface IFailure {
    time: number,
    altitude: number | null,
    reason: string,
}

interface IPayload {
    type: string,
    id: string,
}

export interface ICore {
    serial: string,
    id: string,
}

export interface ILaunch {
    links: ILinks,
    success: boolean,
    failures: IFailure[],
    payloads: IPayload[],
    name: string,
    date_utc: string,
    cores: [
      {
          core: ICore,
      }
  ],
  id: string,
  }
  
  interface ISpaceX {
    docs: ILaunch[];
  }