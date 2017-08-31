using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using TokenAuthWebApiCore.Server.Models;

namespace TokenAuthWebApiCore.Server.Repository
{
    public class ProductRepository
    {
        private readonly IHostingEnvironment _env;

        public ProductRepository(IHostingEnvironment env)
        {
            _env = env;
        }

        internal List<Product> GetAll()
        {
            var webRoot = _env.WebRootPath;
            var filePath = Path.Combine(webRoot, "App_Data/product.json");
            var json = File.ReadAllText(filePath);
            var products = JsonConvert.DeserializeObject<List<Product>>(json);
            return products;
        }
    }
}