import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Update'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'bea51db0-ece1-4bfd-a5ea-f6fdf8ccbdc4'
    },
    body: {
        location: 'new location via update'
    }
} as any


const result =  handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
})
