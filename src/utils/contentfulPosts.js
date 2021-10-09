import { createClient } from "contentful";
//const dotenv =  require('dotenv');
//dotenv.config()
const space = 9heip63yijn8
const accessToken = CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
