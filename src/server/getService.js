
class GetService {
  constructor(){
    this._base = process.env.PUBLIC_URL + '/db.json';
  }

  loadJson = async () => {
    const res = await fetch(this._base);

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._base}, status: ${res.status} `);
    }

    const data = await res.json();
    
    return data;
  }

}

export default GetService