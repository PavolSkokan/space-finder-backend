import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        Location: 'London'
    } 
} as any

// handler(event as any, {} as any)
const result =  handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
})
