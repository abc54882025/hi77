export default {
  async fetch(request, env) {
    try {
      // Trả về file index.html từ folder assets (root của repo)
      return env.ASSETS.fetch(request)
    } catch (err) {
      // Nếu có lỗi, trả về 500
      return new Response(
        `<h1>Worker Error</h1><p>${err.message}</p>`,
        { status: 500, headers: { "content-type": "text/html" } }
      )
    }
  }
}
