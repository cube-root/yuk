import { configure } from '../../backend'
export default async (req, res) => {
    const { hostData } = req.body
    console.log(hostData);
    const response = await configure({ hostData: hostData },'.');
    console.log(response)
    return res.status(200).send({ status: true });
}