import svg from '@/api/icon/svg';

const SvgController = ({ name, clasName }) => {
    return (
        <span
            className={clasName}
            dangerouslySetInnerHTML={{ __html: svg[name] }}
        />
    );
};

export default SvgController;
