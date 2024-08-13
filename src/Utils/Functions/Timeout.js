const Timeout = async (ms) => new Promise(res => setTimeout(res, ms));

export default Timeout;