export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'calculateParabola' : IDL.Func(
        [IDL.Float64, IDL.Float64, IDL.Float64, IDL.Float64],
        [IDL.Float64],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
