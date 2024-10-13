import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import ChurchBranchItem from './ChurchBranchItem';
import churchBranches from './churchBranches';
import { ChurchType } from '../../types/types';
import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import Loader from '../../common/Loader';
import { scaledHeight } from '../../functions/utils';
import { fontScale } from '../../functions/font';

const ChurchBranchComponent = ({
  selectItem,
  selectedItem,
}: {
  selectItem: (item: string) => void;
  selectedItem: string;
}) => {
  const [branches, setBranches] = React.useState<ChurchType[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getBranches = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/church');
        setBranches(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    getBranches();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the branch you worship in.</Text>
      <ScrollView
        contentContainerStyle={{
          gap: 9,
        }}>
        {loading ? (
          <Loader />
        ) : branches && branches.length ? (
          branches.map(branch => (
            <ChurchBranchItem
              name={branch.church_label}
              address={branch.address}
              key={branch.church_id}
              selected={selectedItem === branch.church_label}
              onPress={() => selectItem(branch.church_label)}
            />
          ))
        ) : (
          <Text>No branch found </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: scaledHeight(15),
    paddingVertical: scaledHeight(37),
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(14),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(17),
    alignSelf: 'center',
  },
});

export default ChurchBranchComponent;
