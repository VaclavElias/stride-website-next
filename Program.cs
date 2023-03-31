var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

//app.MapGet("/stride", () => "Hello Stride!");

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();