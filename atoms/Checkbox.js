import classnames from "classnames";
import PropTypes from "prop-types";
import IcomoonIcon from "./IcomoonIcon";

const Checkbox = ({
  id,
  name,
  className,
  handleChange,
  isSelected,
  value,
  checkBoxLabel,
  hideLabel,
  checkBoxDisable = false,
  isError = false,
  checkBoxLabelPos = "right",
  labelClassName = "",
  type,
  icon,
  iconColor,
  iconSize,
  showIcon,
}) => {
  const variant = {
    default: "default",
    withIcon: "withIcon",
    withImage: "withImage",
  };

  const variantStyle = {
    default: "",
    withIcon: `border border-white py-4 px-6 rounded-lg ${isError ? 'border-error-100' : ''} ${isSelected ? 'border-primary-900' : ''}`,
  };
  return (
    <>
      <div
        type={variant[type]}
        className={`relative ${
          variantStyle[type]
        } inline-flex items-center cursor-pointer  ${
          checkBoxLabelPos == "left" ? "flex-row-reverse" : ""
        } ${checkBoxDisable && "pointer-events-none"}`}
      >
        <input
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          type="checkbox"
          checked={isSelected}
          className={`absolute opacity-0 w-full h-full left-0 top-0 z-10 cursor-pointer ${className}`}
        />

        <div
          className={`flex items-center cursor-pointer ${
            type === "default" ? "space-x-0" : ""
          }  ${
            checkBoxLabelPos == "left"
              ? "flex-row-reverse space-x-reverse space-x-10"
              : "space-x-10"
          } ${checkBoxDisable && "pointer-events-none"}`}
        >
          <span
            className={classnames(
              [className],
              "flex justify-center items-center relative w-6 h-6 rounded border",
              {
                "border-neutral-400": !isSelected && !isError,
                "bg-primary-900 border-primary-900":
                  isSelected && !checkBoxDisable,
                "bg-neutral-200 border-neutral-400 pointer-events-none":
                  checkBoxDisable,
                " border-error-100 ": isError,
              }
            )}
          >
            {isSelected && !checkBoxDisable && (
              <IcomoonIcon icon="checkMark" color="#FFF" size={16} />
            )}
            {checkBoxDisable && isSelected && (
              <IcomoonIcon icon="checkMark" color="#9c9caf" size={16} />
            )}
          </span>
          <div
            className={`flex space-x-3 ${
              variant === "withIcon" && checkBoxLabelPos === "left"
                ? "ml-10"
                : ""
            }`}
          >
            {showIcon && (
              <IcomoonIcon icon={icon} size={iconSize} color={iconColor} />
            )}
            <span
              className={`text-sm text-neutral-900 ${labelClassName} ${
                checkBoxLabelPos == "left" ? "mr-2" : "ml-2"
              }`}
            >
              {!hideLabel ? checkBoxLabel : ""}
            </span>
          </div>
        </div>
      </div>
      {isError && (
        <div className="block text-xs text-error-100 mt-1">Error message</div>
      )}
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  isSelected: PropTypes.bool,
  isError: PropTypes.bool,
  value: PropTypes.string,
  checkBoxLabel: PropTypes.string,
  hideLabel: PropTypes.bool,
  hideLabel: PropTypes.showIcon,
  checkBoxDisable: PropTypes.bool,
  checkBoxLabelPos: PropTypes.oneOf(["left", "right"]),
};
