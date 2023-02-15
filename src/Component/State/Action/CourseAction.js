export const CourseAction = (id, courseImg, courseTitle, courseDesc) => {
    return{
        type: "ADD_COURSE",
        payload: {

            id,
            courseImg,
            courseTitle,
            courseDesc,
        },
    };
};







