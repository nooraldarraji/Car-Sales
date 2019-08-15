export const addFeature = payload => {
    console.log('payload', payload)
    return {
        type: "ADD_FEATURE", payload: payload 
    }
}

// export const addFeature = payload => {
//   console.log("addFeature was invoked", payload);
//   return { type: "ADD_FEATURE", payload: payload };
// };
