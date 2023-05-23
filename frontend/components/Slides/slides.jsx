import { StyleSheet, View, FlatList,Text } from "react-native"
import { Styles } from "../../utils/styles.utils"
import { Button } from "react-native-paper"



export const Slides = ({ title, containerStyle ,onPressSeeAll, children, data, slideItem, isList, seeAllButton, scrollBar }) => {
    const styles = StyleSheet.create({
        header: {
            display: !title ? "none" : "flex",
            marginVertical: 7
        },
        slidesContainer: {
            display: "flex",
            flexDirection: "row",
            overflow: "scroll",
        },
        seeAllButton: {
            marginTop: 3
        },
        container: {
            marginVertical: 5
        },
        buttonText: {
            fontSize: 13
        }
    })
    return(
        <View style={[Styles.fullWidth, styles.container, { ...containerStyle }]}>
            <View style={[Styles.flexContainer, Styles.justifyBetween, styles.header]}>
                <Text
                    style={{fontSize:18, fontWeight:500}}
                >
                    {title}
                </Text>
              {seeAllButton? <Button labelStyle={styles.buttonText} textColor="#91A0F6" style={{...styles.seeAllButton,}} onPress={onPressSeeAll}>See All</Button>:null}
            </View>
            {
                isList ? (
                    <FlatList
                        style={{ width: '100%' }}
                        data={data}
                        horizontal={true}
                        renderItem={slideItem}
                        showsHorizontalScrollIndicator={scrollBar}
                    />
                ) : (
                    <View>{children}</View>
                )
            }
        </View>
    )

} 