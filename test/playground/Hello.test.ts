import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'ff5540b3-7380-4b16-b5f0-30e798ae723c'
    } 
} as any

// handler(event as any, {} as any)
const result =  handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
})
