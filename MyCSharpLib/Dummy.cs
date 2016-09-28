using System.Threading.Tasks;

namespace MyCSharpLib
{
    public class Dummy
    {
        public async Task<object> Identity(object config)
        {
            return await Task.FromResult(config);
        }
    }
}
