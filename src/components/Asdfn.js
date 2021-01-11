import React from "react";
import { useOverrides, StackItem, Stack, SocialMedia, Section, Menu, GoogleMap, Formspree } from "@quarkly/components";
import { Text, Input, Button, List, Link, Image, Icon, Hr, Box } from "@quarkly/widgets";
import EmbedJS from "./EmbedJS";
import EmbedHTML from "./EmbedHTML";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"embedJs": {
		"kind": "EmbedJS",
		"props": {}
	},
	"embedHtml": {
		"kind": "EmbedHTML",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list1": {
		"kind": "List",
		"props": {}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"list2": {
		"kind": "List",
		"props": {}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"box": {
		"kind": "Box",
		"props": {}
	}
};

const Asdfn = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<EmbedJS {...override("embedJs")} />
		<EmbedHTML {...override("embedHtml")} />
		<StackItem {...override("stackItem")}>
			<Text {...override("text")} />
		</StackItem>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text1")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
		</Stack>
		<SocialMedia {...override("socialMedia")} />
		<Section {...override("section")} />
		<Menu {...override("menu")} />
		<GoogleMap {...override("googleMap")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input")} />
			<Button {...override("button")} />
		</Formspree>
		<Text {...override("text3")} />
		<List {...override("list")}>
			<Text {...override("text4")} />
		</List>
		<Link {...override("link")} />
		<List {...override("list1")}>
			<Text {...override("text5")} />
		</List>
		<List {...override("list2")}>
			<Text {...override("text6")} />
		</List>
		<Input {...override("input1")} />
		<Image {...override("image")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Button {...override("button1")} />
		<Box {...override("box")} />
		{children}
	</Section>;
};

Object.assign(Asdfn, { ...Section,
	defaultProps,
	overrides
});
export default Asdfn;