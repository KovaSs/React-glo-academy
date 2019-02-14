
class GetService {
  constructor(){
    this._base = process.env.PUBLIC_URL + '/db.json';
  }

  loadJson = async () => {
    return await fetch(this._base)
      .then((res) => res.json())
      .catch((err) => err.status)
  }

  uploadJson = async (data) => {
    // return await fetch(this._base, {
    return await fetch("http://localhost:3001/contacts", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => {
      if (!res.ok) {
        throw res.status
      }
    })
  }

}

export default GetService