var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "_site" // Set the folder where the static files are located (e.g., Eleventy output folder)
});

var app = builder.Build();

// Just a test
app.MapGet("/stride", () => "Hello Stride!");

// Configure the application to redirect 404 (Not Found) errors to a custom 404.html page
app.UseStatusCodePagesWithReExecute("/404.html");

// Set up the application to serve the index.html file when the root path is requested
app.UseDefaultFiles();

// Enable serving static files from the specified WebRootPath
app.UseStaticFiles();

app.Run();