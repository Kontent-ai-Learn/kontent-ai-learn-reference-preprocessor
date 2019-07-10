import {
    ContentItem,
    Fields,
} from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Mon Jul 01 2019 14:28:20 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class.
 * Generator doesn't have this information available and so its up to you to define relationship between models.
 */
export class Image extends ContentItem {
    public border: Fields.MultipleChoiceField;
    public zoomable: Fields.MultipleChoiceField;
    public description: Fields.RichTextField;
    public imageWidth: Fields.MultipleChoiceField;
    public url: Fields.TextField;
    public image: Fields.AssetsField;

    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'image_width') {
                    return 'imageWidth';
                }
                return fieldName;
            }),
        });
    }
}
