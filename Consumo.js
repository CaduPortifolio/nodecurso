const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    const body = Buffer.concat(buffers).toString()