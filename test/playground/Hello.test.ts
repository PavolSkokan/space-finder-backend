import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Delete'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: '9a484a06-0a66-4b83-81bc-0d3900a6ee62'
    }
} as any


const result =  handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
})
