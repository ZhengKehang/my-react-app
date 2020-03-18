import Tag from '../../common/tag/tag'
function tagLine(props) {
    const tags = props.tags.map((tag,index)=>{
        return (
            <Tag tag={tag}></Tag>
        )
    });
    return (
        <div className="tag-line">
            {
                tags
            }
        </div>
    )
}
export default tagLine
