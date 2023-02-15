export const sample1Action = ( id,name, image, desc) => {
    return{
        type: "ADD_SAMPLE",
        data: [id, name, image, desc],
    };
};
