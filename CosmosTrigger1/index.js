module.exports = async function (context, documents) {
    context.log('Document Id modified : ', documents[0].id);
}
