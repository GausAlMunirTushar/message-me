const createError = require("http-errors");

// 404 not found error handler
function notFound(req, res, next) {
  next(createError(404, "Your requested content was not found"));
}

// Default error handler
function errorHandler(err, req, res, next) {
  res.locals.error = process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (!res.locals.html) {
    // Render error page in HTML
    res.render("error", {
      title: "Error Page", // Add this line to define the title
      error: res.locals.error
    });
  } else {
    // Render error message in JSON
    res.json(res.locals.error);
  }
}


module.exports = {
  notFound,
  errorHandler,
};