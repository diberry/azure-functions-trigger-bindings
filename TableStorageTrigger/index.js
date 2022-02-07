module.exports = async function (context, processedQueueItem) {
    context.log('JavaScript table storage trigger function processed work item', myQueueItem);

    // whatever is on out bindings, goes to database
    context.bindings.tableBinding.push({
        PartitionKey: "QueueLog",
            RowKey: processedQueueItem.id.toString(),
            Name: processedQueueItem.name
    });
};