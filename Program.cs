var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "_site"
});

var app = builder.Build();

app.MapGet("/stride", () => "Hello Stride!");

app.UseDefaultFiles();

app.UseStaticFiles();

app.Run();