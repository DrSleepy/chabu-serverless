export default class {
  static success(data) {
    if (!data) throw new Error('No data passed to return');

    return {
      statusCode: 200,
      body: JSON.stringify({ response: data })
    };
  }

  static notFound(message) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: message || 'Not found' })
    };
  }

  static error(error) {
    return {
      statusCode: error && error.statusCode ? error.statusCode : 400,
      body: JSON.stringify({ error: error || 'Unspecified error' })
    };
  }
}
