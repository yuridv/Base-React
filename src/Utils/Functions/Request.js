let block;

const Request = async (url, data = {}) => new Promise(async (res, rej) => {
  try {
    // if (block) return rej({ error: `Aguarde sua outra ação acabar para poder efetuar uma nova...` });

    if (data.body && !data.arq) data.body = JSON.stringify(data.body);
    if (!data.headers) data.headers = {};
    
    if (data.arq) {
      delete data.arq;
      delete data.headers["Content-Type"];
    } else {
      if (!data.headers) data.headers = {};
      if (!data.headers["Content-Type"]) data.headers["Content-Type"] = "application/json; charset=utf-8";
    }
    if (!data.headers["Authorization"]) data.headers["Authorization"] = localStorage.getItem('token');
    if (!data.credentials) data.credentials = 'include';

    // block = true;
    let req = await fetch(url, data);
    
    let result = await req.json();
    if (result.error) {
      if (result.error == "O token inserido é invalido...") localStorage.setItem("token", "")
      return rej(result);
    }
    if ([200, 201, 202].includes(req.status)) return res(result);
    if (result.error) return rej(result);

    return rej({ error: `[1]=> Ocorreu algum erro inesperado no request...\nReporte para os nossos desenvolvedores!`, ...result });
  } catch (err) {
    if (String(err).includes('Failed to fetch')) return rej({ error: `Sem resposta do servidor...\nTente novamente mais tarde!` });

    console.log(err);
    return rej({ error: `[2]=> Ocorreu algum erro inesperado no request...\nReporte para os nossos desenvolvedores!` });
  }
});

export default Request;
