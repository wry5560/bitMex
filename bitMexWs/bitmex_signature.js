import crypto from 'crypto'

export default function(apiSecret,verb,path,expires,data=''){
  return crypto.createHmac('sha256', apiSecret).update(verb + path + expires + data).digest('hex')
}
