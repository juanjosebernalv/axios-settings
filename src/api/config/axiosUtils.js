// interface CancellationControllerObject {
//   controller?: AbortController;
// }

// interface CancelApiObject {
//   [key: string]: {
//     handleRequestCancellation: () => AbortController;
//   };
// }

export function defineCancelApiObject(
  apiObject
) {
  return Object.getOwnPropertyNames(apiObject).reduce(
    (acc, apiPropertyName) => {
      const cancellationControllerObject = {};

      acc[apiPropertyName] = {
        handleRequestCancellation: () => {
          if (cancellationControllerObject.controller) {
            cancellationControllerObject.controller.abort();
          }
          cancellationControllerObject.controller = new AbortController();

          return cancellationControllerObject.controller;
        },
      };

      return acc;
    },
    {}
  );
}
