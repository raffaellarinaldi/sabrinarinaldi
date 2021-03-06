require('dotenv').config();
const ftp = require('basic-ftp')

upload()

async function upload() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: process.env.FTP_HOST_IT,
      user: process.env.FTP_USER_IT,
      password: process.env.FTP_PASSWORD,
      port: process.env.FTP_DEFAULT_PORT,
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    })
    console.log(await client.list())
    await client.ensureDir('')
    await client.clearWorkingDir()
    await client.uploadFromDir('dist/it')
  }
  catch(err) {
    console.log(err)
  }
  client.close()
}
