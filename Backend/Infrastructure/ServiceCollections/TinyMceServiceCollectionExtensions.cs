using EPiServer.Cms.TinyMce.Core;
using CookBook.Backend.Infrastructure.Globals;
using CookBook.Backend.Infrastructure.Configurations;
using CookBook.Backend.Infrastructure.Attributes;


namespace CookBook.Backend.Infrastructure.ServiceCollections
{
    public static class TinyMceServiceCollectionExtensions
    {
        public static IServiceCollection AddTinyMceConfigs(this IServiceCollection services)
        {
            services.Configure<TinyMceConfiguration>(config =>
            {
                config.Default()
                    .AddEpiserverSupport()
                    .AddPlugin("charmap media code")
                    .Toolbar(GetToolbarItems());

                var basicConfig = config.Default().Clone()
                    .AddPlugin("wordcount code preview searchreplace visualblocks anchor image media template charmap hr")
                    .Toolbar("formatselect | anchor | bold italic underline strikethrough | epi-link | alignleft aligncenter alignright alignjustify | numlist bullist | code")
                    .AddSetting("allow_script_urls", true)
                    .AddSetting("remove_trailing_brs", false)
                    .Height(125);


                TinyMceCustomSettingsAttributeRegistration<BasicTinyMceConfigAttribute>.RegisterCustomTinyMceSettingsAttribute(config, basicConfig);

            });


            return services;
        }

        private static string GetToolbarItems()
        {
            var formatSelect = string.Join(' ',
                Constants.TinyMce.FormatSelect,
                Constants.TinyMce.Separator);

            var sectionTextFormat = string.Join(' ',
                Constants.TinyMce.Bold,
                Constants.TinyMce.Italic,
                Constants.TinyMce.Underline,
                Constants.TinyMce.Separator);

            var sectionAlign = string.Join(' ',
                Constants.TinyMce.AlignLeft,
                Constants.TinyMce.AlignCenter,
                Constants.TinyMce.AlignRight,
                Constants.TinyMce.Separator);

            var sectionLinks = string.Join(' ',
                Constants.TinyMce.PersonalizedContent,
                Constants.TinyMce.Link,
                Constants.TinyMce.Anchor,
                Constants.TinyMce.Separator);

            var sectionIndent = string.Join(' ',
                Constants.TinyMce.IncreaseIndent,
                Constants.TinyMce.DecreaseIndent,
                Constants.TinyMce.Separator);

            var sectionList = string.Join(' ',
                Constants.TinyMce.NumberedList,
                Constants.TinyMce.BulletedList,
                Constants.TinyMce.Separator);

            var sectionSpecialChars = string.Join(' ',
                Constants.TinyMce.Superscript,
                Constants.TinyMce.Subscript,
                Constants.TinyMce.SpecialCharacters,
                Constants.TinyMce.Separator);

            var sectionInsertMedia = string.Join(' ',
                Constants.TinyMce.InsertImage,
                Constants.TinyMce.ImageEditor,
                Constants.TinyMce.InsertMedia,
                Constants.TinyMce.Separator);

            var sectionOther = string.Join(' ',
                Constants.TinyMce.ViewSource,
                Constants.TinyMce.ClearFormatting,
                Constants.TinyMce.FullScreen,
                Constants.TinyMce.Separator);

            return string.Concat(formatSelect, sectionTextFormat, sectionAlign, sectionLinks, sectionIndent, sectionList, sectionSpecialChars, sectionInsertMedia, sectionOther);
        }
    }
}
