
// write message to queue
module.exports = async function (context, req) {
    context.log(`HTTP trigger ${context.log(JSON.stringify(req.querye))}`);

    context.bindings.myQueueItem = input.query;
}